using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using GestionProyectoApi1.Models;

namespace GestionProyectoApi1.Controllers
{
    public class EquiposController : ApiController
    {
        private Modelo db = new Modelo();

        // GET: api/Equipos
        public IQueryable<equipo> Getequipo()
        {
            return db.equipo;

        }

        // GET: api/Equipos/5
        [ResponseType(typeof(equipo))]
        public async Task<IHttpActionResult> Getequipo(int id)
        {
            equipo equipo = await db.equipo.FindAsync(id);
            if (equipo == null)
            {
                return NotFound();
            }

            return Ok(equipo);
        }

        // PUT: api/Equipos/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putequipo(int id, equipo equipo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != equipo.equipoId)
            {
                return BadRequest();
            }

            db.Entry(equipo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!equipoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Equipos
        [ResponseType(typeof(equipo))]
        public async Task<IHttpActionResult> Postequipo(equipo equipo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.equipo.Add(equipo);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = equipo.equipoId }, equipo);
        }

        // DELETE: api/Equipos/5

        [ResponseType(typeof(equipo))]
        public async Task<IHttpActionResult> Deleteequipo(int id)
        {
            equipo equipo = await db.equipo.FindAsync(id);
            if (equipo == null)
            {
                return NotFound();
            }

            db.equipo.Remove(equipo);
            await db.SaveChangesAsync();

            return Ok(equipo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool equipoExists(int id)
        {
            return db.equipo.Count(e => e.equipoId == id) > 0;
        }
    }
}