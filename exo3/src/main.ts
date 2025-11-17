import './style.css'

// Types pour l'API JSONPlaceholder
type Album = {
  userId: number;
  id: number;
  title: string;
}

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

type AlbumWithPhoto = Album & {
  photo?: Photo;
}

// Fonction pour récupérer les albums d'un utilisateur
async function fetchUserAlbums(userId: number) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const albums: Album[] = await response.json();
    return albums;
  } catch (error) {
    console.error('Erreur lors de la récupération des albums:', error);
    return [];
  }
}

// Fonction pour récupérer la première photo d'un album
async function fetchFirstPhoto(albumId: number): Promise<Photo | null> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=1`);
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const photos: Photo[] = await response.json();
    return photos[0] || null;
  } catch (error) {
    console.error(`Erreur lors de la récupération de la photo pour l'album ${albumId}:`, error);
    return null;
  }
}

// Fonction pour récupérer les albums avec leurs photos
async function fetchAlbumsWithPhotos(userId: number): Promise<AlbumWithPhoto[]> {
  const albums = await fetchUserAlbums(userId);
  
  // Récupérer la première photo de chaque album en parallèle
  const albumsWithPhotos = await Promise.all(
    albums.map(async (album) => {
      const photo = await fetchFirstPhoto(album.id);
      return { ...album, photo: photo || undefined };
    })
  );
  
  return albumsWithPhotos;
}

// Fonction pour afficher les albums dans le DOM
function displayAlbums(albums: AlbumWithPhoto[]): void {
  const container = document.querySelector('#albums-list');
  
  if (!container) return;
  
  if (albums.length === 0) {
    container.innerHTML = '<p class="error">Aucun album trouvé ou erreur lors du chargement.</p>';
    return;
  }
  
  container.innerHTML = albums
    .map(album => `
      <div class="album-card">
        <span class="album-id">#${album.id}</span>
        ${album.photo ? `
          <div class="album-thumbnail">
            <img src="${album.photo.thumbnailUrl}" alt="${album.photo.title}" loading="lazy" />
          </div>
        ` : '<div class="album-thumbnail no-photo">📷</div>'}
        <div class="album-content">
          <h3>${album.title}</h3>
          <p class="user-info">User ID: ${album.userId}</p>
        </div>
      </div>
    `)
    .join('');
}

// Fonction pour gérer le formulaire
function setupForm(): void {
  const form = document.querySelector('#user-form') as HTMLFormElement;
  const userIdInput = document.querySelector('#user-id') as HTMLInputElement;
  const loadingElement = document.querySelector('#loading') as HTMLDivElement;
  
  if (!form || !userIdInput || !loadingElement) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userId = parseInt(userIdInput.value);
    
    if (isNaN(userId) || userId < 1) {
      alert('Veuillez entrer un ID utilisateur valide (nombre positif)');
      return;
    }
    
    // Afficher le loading
    loadingElement.style.display = 'block';
    
    // Récupérer et afficher les albums avec leurs photos
    const albums = await fetchAlbumsWithPhotos(userId);
    
    // Masquer le loading
    loadingElement.style.display = 'none';
    
    displayAlbums(albums);
  });
}

// Initialisation de l'application
document.querySelector('#app')!.innerHTML = `
  <div class="container">
    <h1>📚 Albums Viewer</h1>
    <p class="subtitle">Récupération d'albums depuis JSONPlaceholder API</p>
    
    <form id="user-form">
      <div class="form-group">
        <label for="user-id">ID de l'utilisateur (1-10):</label>
        <input 
          type="number" 
          id="user-id" 
          name="user-id" 
          min="1" 
          max="10" 
          value="1"
          required
        />
        <button type="submit">Charger les albums</button>
      </div>
    </form>
    
    <div id="loading" style="display: none;">
      <p class="loading">Chargement des albums...</p>
    </div>
    
    <div id="albums-list"></div>
  </div>
`;

setupForm();
