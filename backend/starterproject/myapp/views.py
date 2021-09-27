# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from operator import itemgetter


# Create your views here.
# Class based view to predict based on IRIS model
class EmailUsers(APIView):
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        values = {}
        for key, val in request.data["data"].items():
            values[key] = val
        subject_line = f"Automated email from username {values['username']}"
        template_message = f"Hi Aman! I'm {values['username']} and my email is {values['username']}. I like using the source control {values['sourcecontrol']} and have a team of {values['teamnum']}"
        try:
            send_mail(
                subject_line,
                template_message,
                values.email,
                ['amanshahbusiness@gmail.com'],
                fail_silently=False
            )
        except Exception as e:
            print(e)
            return Response('Invalid header found.', status=404)
        response_dict = {subject_line, template_message}

        return Response(response_dict, status=200)