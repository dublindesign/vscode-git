from django.shortcuts import render

# Create your views here.
count = 0

def mainView(request):
    global count
    count += 1
    return render(request, 'posts/main.html', { 'minutes': count})