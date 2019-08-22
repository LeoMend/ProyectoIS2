namespace GestionProyectoApi1.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("participante")]
    public partial class participante
    {
        public int participanteId { get; set; }

        [Required]
        public string participanteNombre { get; set; }

        public int carreraId { get; set; }

        public int equipoId { get; set; }

        public virtual carrera carrera { get; set; }

        public virtual equipo equipo { get; set; }
    }
}
