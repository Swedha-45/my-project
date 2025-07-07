from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
from .models import User

class CustomUserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        model = User
        fields = (
            "id", "username", "password", "role", "city", "skills", "industry", "location"
        )
