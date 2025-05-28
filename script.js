// Referencias a elementos
const inputFoto = document.getElementById('input-foto');
const previewImg = document.getElementById('preview-imagen');
const fotoPerfil = document.getElementById('foto-perfil');

// Cargar imagen desde localStorage si existe
document.addEventListener('DOMContentLoaded', () => {
  const fotoGuardada = localStorage.getItem('fotoPerfil');
  if (fotoGuardada) {
    previewImg.src = fotoGuardada;
  }
});



// Mostrar imagen y guardarla
inputFoto.addEventListener('change', () => {
  const file = inputFoto.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target.result;
      localStorage.setItem('fotoPerfil', e.target.result); // Guardar en localStorage
    };
    reader.readAsDataURL(file);
  }
});
