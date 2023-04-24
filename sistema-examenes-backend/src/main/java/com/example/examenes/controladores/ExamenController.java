//260.-Creamos ExamenControllers
//261.-Checar con Posmat y verificar
//262.-Nos vamos al Frontend en src/app/pages/admin y creamos con:
// ng g c view-categorias y ng g c add-categorias
//263.-Despues, ir a app-routing.modules.ts debajo del punto 205
package com.example.examenes.controladores;

import com.example.examenes.modelo.Examen;
import com.example.examenes.servicios.ExamenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/examen")
@CrossOrigin("*")
public class ExamenController {

    @Autowired
    private ExamenService examenService;

    @PostMapping("/")
    public ResponseEntity<Examen> guardarExamen(@RequestBody Examen examen) {
        return ResponseEntity.ok(examenService.agregarExamen(examen));
    }

    @PutMapping("/")
    public ResponseEntity<Examen> actualizarExamen(@RequestBody Examen examen) {
        return ResponseEntity.ok(examenService.actualizarExamen(examen));
    }

    @GetMapping("/")
    public ResponseEntity<?> listarExamenes() {
        return ResponseEntity.ok(examenService.obtenerExamenes());
    }

    @GetMapping("/{examenId}")
    public Examen listarExamen(@PathVariable("examenId") Long examenId) {
        return examenService.obtenerExamen(examenId);
    }

    @DeleteMapping("/{examenId}")
    public void eliminarExamen(@PathVariable("examenId") Long examenId) {
        examenService.eliminarExamen(examenId);
    }

}
