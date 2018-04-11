from django.db import models


class Contato(models.Model):
    nome = models.CharField(max_length=2040)
    telefone = models.CharField(max_length=100)

    def serialize_custume_json(self):
        return {"id":self.id, "nome": self.nome, "telefone": self.telefone}
