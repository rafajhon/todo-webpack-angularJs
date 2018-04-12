from django import forms
from .models import Contato

class ContatoForm(forms.Form):
    nome = forms.CharField(max_length=2046)
    telefone = forms.CharField(max_length=100)

    def clean_nome(self):
        nome = self.cleaned_data['nome']
        if nome :
            if Contato.objects.filter(nome=nome).exists():
                raise forms.ValidationError('Já existe um contato salvo com este nome!')
        return nome

    def save(self):
        contato = Contato()
        contato.nome = self.cleaned_data['nome']
        contato.telefone = self.cleaned_data['telefone']
        contato.save()
