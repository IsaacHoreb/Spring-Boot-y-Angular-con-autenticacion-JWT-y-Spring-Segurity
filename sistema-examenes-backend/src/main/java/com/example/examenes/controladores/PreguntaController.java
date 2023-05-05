//258.-creamos PreguntaController
//259.-Despues de crear_todo los metodos, Creamos ExamenController.
package com.example.examenes.controladores;

import com.example.examenes.modelo.Examen;
import com.example.examenes.modelo.Pregunta;
import com.example.examenes.servicios.ExamenService;
import com.example.examenes.servicios.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/pregunta")
@CrossOrigin("*")
public class PreguntaController {

    @Autowired
    private PreguntaService preguntaService;

    @Autowired
    private ExamenService examenService;

    @PostMapping("/")
    public ResponseEntity<Pregunta> guardarPregunta(@RequestBody Pregunta pregunta) {
        return ResponseEntity.ok(preguntaService.agregarPregunta(pregunta));
    }

    @PutMapping("/")
    public ResponseEntity<Pregunta> actualizarPregunta(@RequestBody Pregunta pregunta) {
        return ResponseEntity.ok(preguntaService.actualizarPregunta(pregunta));
    }

    @GetMapping("/examen/{examenId}")
    public ResponseEntity<?> listarPreguntasDelExamen(@PathVariable("examenId") Long examenId) {
        Examen examen = examenService.obtenerExamen(examenId);
        Set<Pregunta> preguntas = examen.getPreguntas();

        List examenes = new ArrayList(preguntas);
        if (examenes.size() > Integer.parseInt(examen.getNumerosDePreguntas())) {
            examenes.subList(0, Integer.parseInt(examen.getNumerosDePreguntas() + 1));
        }

        Collections.shuffle(examenes);
        return ResponseEntity.ok(examenes);
    }

    @GetMapping("/{preguntaId}")
    public Pregunta listarPreguntaPorId(@PathVariable("preguntaId") Long preguntaId) {
        return preguntaService.obtenerPregunta(preguntaId);
    }

    @DeleteMapping("/{preguntaId}")
    public void eliminarPregunta(@PathVariable("preguntaId") Long preguntaId) {
        preguntaService.eliminarPregunta(preguntaId);
    }

    //388.-Creamos el metodo
    //388.1-Ir al Frontend en preguntaService.ts para hacer modificaciones 
    @GetMapping("/examem/todos/{examenId}")
    public ResponseEntity<?> listarPreguntaDelExamenComoAdministrador(@PathVariable("examenId") Long examenId) {
        Examen examen = new Examen();
        examen.setExamenId(examenId);
        Set<Pregunta> preguntas = preguntaService.obtenerPreguntaDelExamen(examen);
        return ResponseEntity.ok(preguntas);
    }
}
