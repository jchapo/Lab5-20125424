package com.example.lab5gtics.controllers;

import com.gtics.propuesta.entity.Usuario;
import com.gtics.propuesta.repository.UsuarioRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;



@Controller
@RequestMapping("/admin_usuarios")
public class UsuarioController {

    final UsuarioRepository usuarioRepository;

    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @GetMapping(value = {"/listar", ""})
    public String listar (Model model){
        model.addAttribute("page","gestionusuarios");
        model.addAttribute("imgUtil", new ImageUtil());
        model.addAttribute("lista",usuarioRepository.findAll());

        return "mapa";}

    @PostMapping("/guardar")
    public String guardar(Usuario usuario) {
        usuarioRepository.save(usuario);
        return "redirect:/usuarios/list";
    }

    @GetMapping("/editar")
    public String formEditar(@RequestParam("id") int id, Model model) {

        Optional<Usuario> optional = usuarioRepository.findById(id);

        if(optional.isPresent()){ //existe un shipper con ese ID
            Usuario usuario = optional.get();
            model.addAttribute("usuario",usuario);
            model.addAttribute("gu",1);

            return "gestionusuarios";
        }else{
            model.addAttribute("editar",1);
            return "gestionusuarios";
        }
    }



}