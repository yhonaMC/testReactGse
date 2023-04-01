import React from "react";

const Filter = ({
  userId,
  setUserId,
  title,
  setTitle,
  setSortType,
  filteredPosts,
  handleGetId,
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8 py-8 max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-800 text-xl font-bold mb-4">Filtro</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="user-select"
              >
                Usuario
              </label>
              <select
                id="user-select"
                className="w-full border border-gray-400 p-2 rounded"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              >
                <option value="">Todos los usuarios</option>
                <option value="1">Usuario 1</option>
                <option value="2">Usuario 2</option>
                <option value="3">Usuario 3</option>
                <option value="4">Usuario 4</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="title-input"
              >
                Título
              </label>
              <input
                id="title-input"
                type="text"
                className="w-full border border-gray-400 p-2 rounded"
                placeholder="Escribe aquí el título a buscar"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-gray-800 text-xl font-bold mb-4">
              Ordenamiento
            </h2>
            <div>
              <button
                className="border border-gray-400 px-4 py-2 rounded-lg mr-2 mb-2 focus:outline-none focus:shadow-outline-blue"
                onClick={() => setSortType("asc")}
              >
                A-Z
              </button>
              <button
                className="border border-gray-400 px-4 py-2 rounded-lg mb-2 focus:outline-none focus:shadow-outline-blue"
                onClick={() => setSortType("desc")}
              >
                Z-A
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-gray-800 text-xl font-bold mb-4">
            Posts filtrados ({filteredPosts?.length})
          </h2>
          {filteredPosts?.length === 0 && (
            <p>No se encontraron resultados con los filtros aplicados.</p>
          )}
          {filteredPosts?.map(({ id, title, body, userId }) => (
            <div key={id} className="bg-white rounded shadow p-4 mb-4">
              <h1
                className="text-blue-700 font-bold cursor-pointer text-lg"
                onClick={() => handleGetId(userId)}
              >
                {`No. ${userId}`}
              </h1>
              <h3 className="text-blue-900 font-bold">{title}</h3>
              <p className="text-gray-700">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
