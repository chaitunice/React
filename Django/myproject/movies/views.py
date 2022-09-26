from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader

# Create your views here.

def moviesindex(request):
    template = loader.get_template('moviesindex.html')
    return HttpResponse(template.render({}, request))