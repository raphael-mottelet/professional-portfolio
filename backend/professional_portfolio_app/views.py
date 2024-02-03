from django.http import JsonResponse

def api_example(request):
    data = {'message': 'Hello from Django API!'}
    return JsonResponse(data)
