import React from 'react';

interface VideoFormProps {
  onSubmit: (data: any) => void;
  initialData?: any;
  submitLabel?: string;
}

export default function VideoForm({ onSubmit, initialData, submitLabel = "Save" }: VideoFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-pink-300 p-8 rounded-xl shadow-lg">
      {/* Campo de Título */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-pink-700">
          Titulo
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={initialData?.title}
          className="mt-1 text-gray-900 block w-full rounded-md border-2 border-pink-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-lg font-semibold"
        />
      </div>

      {/* Campo de Categoría */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-pink-700">
          Categoria
        </label>
        <select
          id="category"
          name="category"
          defaultValue={initialData?.category}
          className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 text-lg font-semibold"
        >
          <option value="frontend" className="text-cyan-500 text-lg font-semibold">Frontend</option>
          <option value="backend" className="text-green-500 text-lg font-semibold">Backend</option>
          <option value="innovation" className="text-orange-500 text-lg font-semibold">Innovation</option>
        </select>
      </div>

      {/* Campo de URL de Imagen */}
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-pink-700">
          URL de la Imagen
        </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          defaultValue={initialData?.imageUrl}
          className="mt-1 block w-full rounded-md border-2 border-pink-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-lg font-semibold"
        />
      </div>

      {/* Campo de URL de Video */}
      <div>
        <label htmlFor="videoUrl" className="block text-sm font-medium text-pink-700">
          URL del Video
        </label>
        <input
          type="url"
          id="videoUrl"
          name="videoUrl"
          defaultValue={initialData?.videoUrl}
          className="mt-1 block w-full rounded-md border-2 border-pink-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-lg font-semibold"
        />
      </div>

      {/* Campo de Descripción */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-pink-700">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={initialData?.description}
          className="mt-1 block w-full rounded-md border-2 border-pink-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-lg font-semibold"
        />
      </div>

      {/* Botones de Enviar y Limpiar */}
      <div className="flex justify-end space-x-4">
        <button
          type="reset"
          className="text-white px-4 py-2 border-2 border-pink-300 rounded-md bg-pink-500 hover:bg-pink-600 text-lg font-semibold"
        >
          Limpiar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 text-lg font-semibold"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
