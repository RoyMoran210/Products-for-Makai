using Makai.Models.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Makai.Models.Requests.Products
{
    public class ProductAddRequest
    {
        [Required]
        [StringLength(50, MinimumLength = 2)]
        public string Name { get; set; }
        [Required]
        [Range(1, Int32.MaxValue)]
        public int ProductTypeId { get; set; }
        [Required]
        [StringLength(400, MinimumLength = 2)]
        public string Description { get; set; }
        [Required]
        [Range(1, Int32.MaxValue)]
        public int StandId { get; set; }
        [Required]
        [Range(1, Int32.MaxValue)]
        public int Identifier { get; set; }
        [Required]
        [Range(1, Int32.MaxValue)]
        public int StatusType { get; set; }
        [Required]
        [Range(1, Int32.MaxValue)]
        public int HourlyPriceInCents { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 2)]
        public string Position { get; set; }
        public List<int> ImageIds { get; set; }
    }
}
