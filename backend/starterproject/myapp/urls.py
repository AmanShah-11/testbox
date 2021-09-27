from django.urls import path
from .views import EmailUsers

urlpatterns = [
    path("email/", EmailUsers.as_view(), name="email_users"),
    # path("", APILoginView.as_view(), name="api_login"),
]
