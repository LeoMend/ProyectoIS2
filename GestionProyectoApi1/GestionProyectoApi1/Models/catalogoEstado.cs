namespace GestionProyectoApi1.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("catalogoEstado")]
    public partial class catalogoEstado
    {
       
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int catalogoEstadoId { get; set; }

        [Required]
        public string catalogoEstadoNombre { get; set; }

      
    }
}
