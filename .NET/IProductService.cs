using Makai.Models;
using Makai.Models.Domain.Products;
using Makai.Models.Requests.Products;
using System.Collections.Generic;

namespace Makai.Services.Interfaces
{
    public interface IProductService
    {
        Paged<Product> GetByProductTypePaginated(int pageIndex, int pageSize);
        List<Product> GetByStandId(int standId);
        List<Product> GetAll();
        Paged<Product> Paginated(int pageIndex, int pageSize);
        Paged<Product> Search(int pageIndex, int pageSize, string query);
        int Add(ProductAddRequest request, int userId);
        void Update(ProductUpdateRequest request, int userId);
        void Delete(int userId);
    }
}
