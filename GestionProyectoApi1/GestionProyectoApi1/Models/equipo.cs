namespace GestionProyectoApi1.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("equipo")]
    public partial class equipo
    {
        
        [Key]
        public int equipoId { get; set; }

        [Required]
        public string equipoNombre { get; set; }

        public int catalogoEstadoId { get; set; }

        public int eventoId { get; set; }

        public virtual catalogoEstado catalogoEstado { get; set; }

        public virtual evento evento { get; set; }
        
    }
}
