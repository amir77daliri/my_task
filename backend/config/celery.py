from datetime import timedelta
import os

from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
celery_app = Celery('config')


celery_app.conf.broker_url = 'redis://127.0.0.1:6379/0'
celery_app.conf.result_backend = 'redis://127.0.0.1:6379/0'
celery_app.conf.task_serializer = 'json'
celery_app.conf.result_serializer = 'pickle'
celery_app.conf.accept_content = ['json', 'pickle']
celery_app.conf.result_expires = timedelta(days=1)
celery_app.conf.task_always_eager = False
celery_app.conf.worker_prefetch_multiplier = 4
celery_app.conf.timezone = 'UTC'

celery_app.autodiscover_tasks()


