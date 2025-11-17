"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
// Fonction pour récupérer les albums d'un utilisateur
function fetchUserAlbums(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, albums, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/albums?userId=".concat(userId))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Erreur HTTP: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    albums = _a.sent();
                    return [2 /*return*/, albums];
                case 3:
                    error_1 = _a.sent();
                    console.error('Erreur lors de la récupération des albums:', error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Fonction pour récupérer la première photo d'un album
function fetchFirstPhoto(albumId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, photos, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/photos?albumId=".concat(albumId, "&_limit=1"))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Erreur HTTP: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    photos = _a.sent();
                    return [2 /*return*/, photos[0] || null];
                case 3:
                    error_2 = _a.sent();
                    console.error("Erreur lors de la r\u00E9cup\u00E9ration de la photo pour l'album ".concat(albumId, ":"), error_2);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Fonction pour récupérer les albums avec leurs photos
function fetchAlbumsWithPhotos(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var albums, albumsWithPhotos;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchUserAlbums(userId)];
                case 1:
                    albums = _a.sent();
                    return [4 /*yield*/, Promise.all(albums.map(function (album) { return __awaiter(_this, void 0, void 0, function () {
                            var photo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, fetchFirstPhoto(album.id)];
                                    case 1:
                                        photo = _a.sent();
                                        return [2 /*return*/, __assign(__assign({}, album), { photo: photo || undefined })];
                                }
                            });
                        }); }))];
                case 2:
                    albumsWithPhotos = _a.sent();
                    return [2 /*return*/, albumsWithPhotos];
            }
        });
    });
}
// Fonction pour afficher les albums dans le DOM
function displayAlbums(albums) {
    var container = document.querySelector('#albums-list');
    if (!container)
        return;
    if (albums.length === 0) {
        container.innerHTML = '<p class="error">Aucun album trouvé ou erreur lors du chargement.</p>';
        return;
    }
    container.innerHTML = albums
        .map(function (album) { return "\n      <div class=\"album-card\">\n        <span class=\"album-id\">#".concat(album.id, "</span>\n        ").concat(album.photo ? "\n          <div class=\"album-thumbnail\">\n            <img src=\"".concat(album.photo.thumbnailUrl, "\" alt=\"").concat(album.photo.title, "\" loading=\"lazy\" />\n          </div>\n        ") : '<div class="album-thumbnail no-photo">📷</div>', "\n        <div class=\"album-content\">\n          <h3>").concat(album.title, "</h3>\n          <p class=\"user-info\">User ID: ").concat(album.userId, "</p>\n        </div>\n      </div>\n    "); })
        .join('');
}
// Fonction pour gérer le formulaire
function setupForm() {
    var _this = this;
    var form = document.querySelector('#user-form');
    var userIdInput = document.querySelector('#user-id');
    var loadingElement = document.querySelector('#loading');
    if (!form || !userIdInput || !loadingElement)
        return;
    form.addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
        var userId, albums;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    userId = parseInt(userIdInput.value);
                    if (isNaN(userId) || userId < 1) {
                        alert('Veuillez entrer un ID utilisateur valide (nombre positif)');
                        return [2 /*return*/];
                    }
                    // Afficher le loading
                    loadingElement.style.display = 'block';
                    return [4 /*yield*/, fetchAlbumsWithPhotos(userId)];
                case 1:
                    albums = _a.sent();
                    // Masquer le loading
                    loadingElement.style.display = 'none';
                    displayAlbums(albums);
                    return [2 /*return*/];
            }
        });
    }); });
}
// Initialisation de l'application
document.querySelector('#app').innerHTML = "\n  <div class=\"container\">\n    <h1>\uD83D\uDCDA Albums Viewer</h1>\n    <p class=\"subtitle\">R\u00E9cup\u00E9ration d'albums depuis JSONPlaceholder API</p>\n    \n    <form id=\"user-form\">\n      <div class=\"form-group\">\n        <label for=\"user-id\">ID de l'utilisateur (1-10):</label>\n        <input \n          type=\"number\" \n          id=\"user-id\" \n          name=\"user-id\" \n          min=\"1\" \n          max=\"10\" \n          value=\"1\"\n          required\n        />\n        <button type=\"submit\">Charger les albums</button>\n      </div>\n    </form>\n    \n    <div id=\"loading\" style=\"display: none;\">\n      <p class=\"loading\">Chargement des albums...</p>\n    </div>\n    \n    <div id=\"albums-list\"></div>\n  </div>\n";
setupForm();
