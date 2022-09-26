from django.db import models

# Create your models here.
class Persons(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
