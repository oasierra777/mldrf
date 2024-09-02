from django.core.exceptions import ValidationError
from django.http.response import HttpResponseBadRequest
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.parsers import MultiPartParser
from rest_framework.parsers import FormParser
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.user.models import UserAccount
from apps.user.serializers import UserSerializer

class CreateUserProfileView(APIView):
    
    def post(self, request, format=None):
        data = self.request.data
        account = data["account"]
        user = UserAccount.objects.get_or_create(
            account=account,
            email=account,
            username=account,
        )
        return Response({'message': 'Usuario creado'})

class DetailUserProfileView(APIView):
    def get(self,request,account,*args, **kwargs):
        user = UserAccount.objects.get(account=account)
        serializer = UserSerializer(user)
        return Response({
            'user':serializer.data
        },status=status.HTTP_200_OK)
