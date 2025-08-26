from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    data = {'username' : "jwala"}
    return render(request, 'home.html', data)


def menu(request):
    print("hi entered ")
    data = {}
    return render(request, 'Menu.html')

def contact(request):
    data = {'username' : "jwala"}
    return render(request, 'contact.html', data)