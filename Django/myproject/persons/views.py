import re
from django.template import loader
from django.http import HttpResponse, HttpResponseRedirect
from .models import Persons
from django.urls import reverse

# Create your views here.

def index(request):
    data = Persons.objects.all().values()
    template = loader.get_template('index.html')

    context = {
        'data':data
    }
    return HttpResponse(template.render(context, request))

def add(request):
    template = loader.get_template('add.html')
    return HttpResponse(template.render({}, request))

def addperson(request):
    f_name = request.POST['fname']
    l_name = request.POST['lname']
    p1 = Persons(fname=f_name, lname=l_name)
    p1.save()
    return HttpResponseRedirect(reverse('index'))

def update(request, x):
    person = Persons.objects.get(id=x)
    context = {
        "person": person
    }
    template = loader.get_template('update.html')
    return HttpResponse(template.render(context, request))

def updatePerson(request, x):
    p1 = Persons.objects.get(id = x)
    p1.fname = request.POST['fname']
    p1.lname = request.POST['lname']
    p1.save()
    return HttpResponseRedirect(reverse('index'))

def delete(request, x):
    p1 = Persons.objects.get(id = x)
    p1.delete()
    return HttpResponseRedirect(reverse('index'))
