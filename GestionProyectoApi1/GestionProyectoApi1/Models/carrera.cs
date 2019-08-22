namespace GestionProyectoApi1.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("carrera")]
    public partial class carrera
    {
        
        [Key]
        public int carreraId { get; set; }

        [Required]
        public string CarreraNombre { get; set; }


    }
}
