namespace GestionProyectoApi1.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Modelo : DbContext
    {
        public Modelo()
            : base("name=Modelo")
        {
        }

        public  DbSet<carrera> carrera { get; set; }
        public  DbSet<catalogoEstado> catalogoEstado { get; set; }
        public  DbSet<equipo> equipo { get; set; }
        public  DbSet<evento> evento { get; set; }
        public  DbSet<participante> participante { get; set; }
        public  DbSet<sysdiagrams> sysdiagrams { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            
        }
    }
}
