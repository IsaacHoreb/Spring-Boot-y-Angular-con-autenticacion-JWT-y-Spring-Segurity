//249.- Creamos
//251.- Creamos la implementacion (CategoriaerviceImpl)
package com.example.examenes.servicios;

import com.example.examenes.modelo.Categoria;

import java.util.Set;

//Creamo Metodo
public interface CategoriaService {

    Categoria agregarCategoria(Categoria categoria);

    Categoria actualizarCategoria(Categoria categoria);

    Set<Categoria> obtenerCategoria();

    Categoria obtenerCategoria(Long categoriaId);

    void eliminarCategoria(Long categoriaId);

}
