//255.-Creamo el controlador de categoria
//256.-Despues de agregar_todo, probamo en Postam
package com.example.examenes.controladores;

import com.example.examenes.modelo.Categoria;
import com.example.examenes.servicios.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*; 

@RestController
@RequestMapping("/categoria")
@CrossOrigin("*")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @PostMapping("/")
    public ResponseEntity<Categoria> guardarCategoria(@RequestBody Categoria categoria) {
        Categoria categoriaGuardada = categoriaService.agregarCategoria(categoria);
        return ResponseEntity.ok(categoriaGuardada);
    }

    @GetMapping("/{categoriaId}")
    public Categoria listarCategoriaPorId(@PathVariable("categoriaId") Long categoriaId) {
        return categoriaService.obtenerCategoria(categoriaId);
    }

    @GetMapping("/")
    public ResponseEntity<?> listarCategorias() {
        return ResponseEntity.ok(categoriaService.obtenerCategoria());
    }

    @PutMapping("/")
    public Categoria actualizarCategoria(@RequestBody Categoria categoria) {
        return categoriaService.actualizarCategoria(categoria);
    }

    @DeleteMapping("/{categoriaId}")
    public void eliminarCategoria(@PathVariable("categoriaId") Long categoriaId) {
        categoriaService.eliminarCategoria(categoriaId);
    }

}
