package com.example.lab5gtics.controllers;

import com.example.lab5gtics.entity.Mascotas;
import com.example.lab5gtics.repository.MascotasRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;



@Controller
@RequestMapping("/mascotas")
public class MascotaController {

    final MascotasRepository mascotaRepository;

    public MascotaController(MascotasRepository mascotaRepository) {
        this.mascotaRepository = mascotaRepository;
    }

    @GetMapping(value = {"/listar", ""})
    public String listar (Model model){
        model.addAttribute("page","mascotas");
        model.addAttribute("listamascotas",mascotaRepository.findAll());

        return "mascotas/list";
    }

    @GetMapping("/editar")
    public String editarMascotas(Model model, @RequestParam("id") int id) {

        Optional<Mascotas> optionalMascotas = mascotaRepository.findById(id);

        if (optionalMascotas.isPresent()) {
            Mascotas mascota = optionalMascotas.get();
            model.addAttribute("mascota", mascota);
            return "mascotas/editFrm";
        } else {
            return "redirect:/mascotas";
        }
    }

    @PostMapping("/guardar")
    public String guardarMascota(Mascotas mascotas) {
        mascotaRepository.save(mascotas);
        return "redirect:/mascotas";
    }

    @GetMapping("/nueva")
    public String nuevaMascota(Model model) {
        model.addAttribute("listamascotas", mascotaRepository.findAll());
        return "mascotas/newFrm";
    }


}