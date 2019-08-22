namespace GestionProyectoApi1.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("evento")]
    public partial class evento
    {
        [Key]
        public int eventoId { get; set; }

        [Required]
        public string eventoNombre { get; set; }

        [Column(TypeName = "date")]
        public DateTime eventoFecha { get; set; }

        public int catalogoEstadoId { get; set; }

        public virtual catalogoEstado catalogoEstado { get; set; }

    }
}
