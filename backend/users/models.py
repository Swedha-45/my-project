from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (('employee', 'Employee'), ('employer', 'Employer'))
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    city = models.CharField(max_length=100, blank=True)
    skills = models.TextField(blank=True)
    industry = models.CharField(max_length=100, blank=True)
    location = models.CharField(max_length=100, blank=True)

