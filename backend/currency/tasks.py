import random
from .models import Currency
from celery import shared_task
from config.celery import celery_app


def create_fake_primitive_data():
    Currency.objects.bulk_create([
        Currency(name="بیت کوین", author_email="fakemail@gmail.com", content="این ارز دیجیتال بیت کوین است."),
        Currency(name="تتر", author_email="fakemail@gmail.com", content="این ارز دیجیتال تتر است."),
        Currency(name="اتریوم", author_email="fakemail@gmail.com", content="این ارز دیجیتال اتریوم است."),
    ])


@celery_app.on_after_finalize.connect
def setup_periodic_tasks(sender, **kwargs):
    # Calls test('hello') every 10 seconds.
    sender.add_periodic_task(10, change_random_price.s(), name='add every 3')


@shared_task
def change_random_price():
    all_currencies_count = Currency.objects.all().count()
    if all_currencies_count < 1:
        create_fake_primitive_data()

    all_currencies = Currency.objects.all()
    random_obj = random.choice(all_currencies)
    random_obj.price = random.randint(10000, 1000000000)
    random_obj.save()
