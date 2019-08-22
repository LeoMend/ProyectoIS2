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
    public class CarrerasController : ApiController
    {
        private Modelo db = new Modelo();

        // GET: api/Carreras
        public IQueryable<carrera> Getcarrera()
        {
            return db.carrera;
        }

        // GET: api/Carreras/5
        [ResponseType(typeof(carrera))]
        public async Task<IHttpActionResult> Getcarrera(int id)
        {
            carrera carrera = await db.carrera.FindAsync(id);
            if (carrera == null)
            {
                return NotFound();
            }

            return Ok(carrera);
        }

        // PUT: api/Carreras/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putcarrera(int id, carrera carrera)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carrera.carreraId)
            {
                return BadRequest();
            }

            db.Entry(carrera).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!carreraExists(id))
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

        // POST: api/Carreras
        [ResponseType(typeof(carrera))]
        public async Task<IHttpActionResult> Postcarrera(carrera carrera)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.carrera.Add(carrera);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = carrera.carreraId }, carrera);
        }

        // DELETE: api/Carreras/5
        [ResponseType(typeof(carrera))]
        public async Task<IHttpActionResult> Deletecarrera(int id)
        {
            carrera carrera = await db.carrera.FindAsync(id);
            if (carrera == null)
            {
                return NotFound();
            }

            db.carrera.Remove(carrera);
            await db.SaveChangesAsync();

            return Ok(carrera);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool carreraExists(int id)
        {
            return db.carrera.Count(e => e.carreraId == id) > 0;
        }
    }
}