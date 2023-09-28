from django.shortcuts import HttpResponse
from .tasks import change_random_price


def change_random(request):
    change_random_price.delay()
    return HttpResponse("تسک با موفقیت ران شد")
