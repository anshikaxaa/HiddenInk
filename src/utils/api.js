const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://hidden-ink.vercel.app/api';

// Helper function to get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }
  return response.json();
};

// Auth API calls
export const authAPI = {
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(response);
  },

  signup: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(response);
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: async () => {
    const token = getAuthToken();
    if (!token) throw new Error('No token found');

    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },
};


// Notes API calls
export const notesAPI = {
  getAllNotes: async () => {
    const token = getAuthToken();
    if (!token) throw new Error('No token found');

    const response = await fetch(`${API_BASE_URL}/notes`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },

  getNote: async (id) => {
    const token = getAuthToken();
    if (!token) throw new Error('No token found');

    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },

  createNote: async (noteData) => {
    const token = getAuthToken();
    if (!token) throw new Error('No token found');

    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(noteData),
    });
    return handleResponse(response);
  },

  updateNote: async (id, noteData) => {
    const token = getAuthToken();
    if (!token) throw new Error('No token found');

    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(noteData),
    });
    return handleResponse(response);
  },

  deleteNote: async (id) => {
    const token = getAuthToken();
    if (!token) throw new Error('No token found');

    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },
};

// Folders API calls
export const foldersAPI = {
  getAllFolders: async () => {
    const token = getAuthToken();
    if (!token) throw new Error('No token found');

    const response = await fetch(`${API_BASE_URL}/folders`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },

  createFolder: async (folderData) => {
    const token = getAuthToken();
    if (!token) throw new Error('No token found');

    const response = await fetch(`${API_BASE_URL}/folders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(folderData),
    });
    return handleResponse(response);
  },

  updateFolder: async (id, folderData) => {
    const token = getAuthToken();
    if (!token) throw new Error('No token found');

    const response = await fetch(`${API_BASE_URL}/folders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(folderData),
    });
    return handleResponse(response);
  },

  deleteFolder: async (id) => {
    const token = getAuthToken();
    if (!token) throw new Error('No token found');

    const response = await fetch(`${API_BASE_URL}/folders/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },
};
