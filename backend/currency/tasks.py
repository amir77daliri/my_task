import random
from .models import Currency
from celery import shared_task
from config.celery import celery_app


@celery_app.on_after_finalize.connect
def setup_periodic_tasks(sender, **kwargs):
    # Calls test('hello') every 10 seconds.
    sender.add_periodic_task(3, change_random_price.s(), name='add every 3')


@shared_task
def change_random_price():
    all_currencies = Currency.objects.all()
    random_obj = random.choice(all_currencies)
    random_obj.price = random.randint(10000, 1000000000)
    random_obj.save()
