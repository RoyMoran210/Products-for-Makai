using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sabio.Models.Domain.Products
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public LookUp ProductType { get; set; }
        public string Description { get; set; }
        public int StandId { get; set; }
        public int Identifier { get; set; }
        public LookUp StatusType { get; set; }
        public int HourlyPriceInCents { get; set; }
        public string Position { get; set; }
        public int CreatedBy { get; set; }
        public int ModifiedBy { get; set; }
        public int FileId { get; set; }
        public string Url { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; } 
    }
}
