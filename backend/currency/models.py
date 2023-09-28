from django.db import models


class Currency(models.Model):
    name = models.CharField(max_length=100, unique=True)
    price = models.IntegerField(default=10000)
    author_email = models.EmailField()
    content = models.TextField()
    change_price = models.IntegerField(default=0)

    def __str__(self):
        return self.name
