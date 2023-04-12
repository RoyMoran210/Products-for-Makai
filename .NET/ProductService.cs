using Makai.Data;
using Makai.Data.Providers;
using Makai.Models;
using Makai.Models.Domain;
using Makai.Models.Domain.Products;
using Makai.Models.Requests.Products;
using Makai.Services.Interfaces;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Makai.Services
{
    public class ProductService : IProductService
    {
        IDataProvider _data = null;
        ILookUpService _lookUpService = null;
        public ProductService(IDataProvider data, ILookUpService lookUpService)
        {
            _data = data;
            _lookUpService = lookUpService;
        }

        #region - GETS - OK
        public Paged<Product> GetByProductTypePaginated(int pageIndex, int pageSize)
        {
            string procName = "[dbo].[Products_Select_ByProductType_Paginated]";
            Paged<Product> pagedProduct = null;
            List<Product> list = null;
            int totalCount = 0;
            _data.ExecuteCmd(procName, inputParamMapper: delegate (SqlParameterCollection col)
            {
                col.AddWithValue("@PageIndex", pageIndex);
                col.AddWithValue("@PageSize", pageSize);
            }, singleRecordMapper: delegate (IDataReader reader, short set)
            {
                int startingIndex = 0;
                Product aProduct = MapSingleProduct(reader, ref startingIndex);
                
                if (totalCount== 0)
                {
                totalCount = reader.GetSafeInt32(startingIndex++);
                }
                if (list == null)
                {
                    list = new List<Product>();
                }
                list.Add(aProduct);
                if (list != null)
                {
                    pagedProduct = new Paged<Product>(list, pageIndex, pageSize, totalCount);
                }
            });
            return pagedProduct;
        }

        public List<Product> GetByStandId(int standId)
        {
            string procName = "[dbo].[Products_Select_ByStandId]";
            List<Product> list = null;
            _data.ExecuteCmd(procName, inputParamMapper: delegate (SqlParameterCollection col)
            {
                col.AddWithValue("@StandId", standId);
            }, singleRecordMapper: delegate (IDataReader reader, short set)
            {
                int startingIndex = 0;
                Product aProduct = MapSingleProduct(reader, ref startingIndex);

                if (list == null)
                {
                    list = new List<Product>();
                }
                list.Add(aProduct);
            });
            return list;
        }

        public List<Product> GetAll()
        {
            string procName = "[dbo].[Products_SelectAll]";
            List<Product> list = null;
            _data.ExecuteCmd(procName, inputParamMapper: null
            , singleRecordMapper: delegate (IDataReader reader, short set)
            {
                int startingIndex = 0;
                Product aProduct = MapSingleProduct(reader, ref startingIndex);

                if (list == null)
                {
                    list = new List<Product>();
                }
                list.Add(aProduct);
            });
            return list;
        }

        public Paged<Product> Search(int pageIndex, int pageSize, string query)
        {
            string procName = "[dbo].[Products_Search]";
            Paged<Product> pagedProduct = null;
            List<Product> list = null;
            int totalCount = 0;
            _data.ExecuteCmd(procName, inputParamMapper: delegate (SqlParameterCollection col)
            {
                col.AddWithValue("@PageIndex", pageIndex);
                col.AddWithValue("@PageSize", pageSize);
                col.AddWithValue("@Query", query);
            }, singleRecordMapper: delegate (IDataReader reader, short set)
            {
                int startingIndex = 0;
                Product aProduct = MapSingleProduct(reader, ref startingIndex);

                if (totalCount == 0)
                {
                    totalCount = reader.GetSafeInt32(startingIndex++);
                }
                if (list == null)
                {
                    list = new List<Product>();
                }
                list.Add(aProduct);
                if (list != null)
                {
                    pagedProduct = new Paged<Product>(list, pageIndex, pageSize, totalCount);
                }
            });
            return pagedProduct;
        }

        public Paged<Product> Paginated(int pageIndex, int pageSize)
        {
            string procName = "[dbo].[Products_SelectAll_Paginated]";
            Paged<Product> pagedProduct = null;
            List<Product> list = null;
            int totalCount = 0;
            _data.ExecuteCmd(procName, inputParamMapper: delegate (SqlParameterCollection col)
            {
                col.AddWithValue("@PageIndex", pageIndex);
                col.AddWithValue("@PageSize", pageSize);
            }, singleRecordMapper: delegate (IDataReader reader, short set)
            {
                int startingIndex = 0;
                Product aProduct = MapSingleProduct(reader, ref startingIndex);

                if (totalCount == 0)
                {
                    totalCount = reader.GetSafeInt32(startingIndex++);
                }
                if (list == null)
                {
                    list = new List<Product>();
                }
                list.Add(aProduct);
                if (list != null)
                {
                    pagedProduct = new Paged<Product>(list, pageIndex, pageSize, totalCount);
                }
            });
            return pagedProduct;
        }
        #endregion

        #region - ADD/UPDATE/DELETE - 
        public int Add(ProductAddRequest request, int userId)
        {
            DataTable productImagesTable = null;

            if (request.ImageIds != null)
            {
                productImagesTable = MapImagesToTable(request.ImageIds);
            }
            int id = 0;
            string procName = "[dbo].[Products_Insert]";
            _data.ExecuteNonQuery(procName, inputParamMapper: delegate (SqlParameterCollection col)
            {
                AddCommonParams(request, col, userId);
                col.AddWithValue("@BatchImages", productImagesTable);

                SqlParameter idOut = new SqlParameter("@Id", SqlDbType.Int);
                idOut.Direction = ParameterDirection.Output;

                col.Add(idOut);

            }, returnParameters: delegate (SqlParameterCollection returnCol)
            {
                object oId = returnCol["@Id"].Value;
                int.TryParse(oId.ToString(), out id);
            });
            return id;
        }

        public void Update(ProductUpdateRequest request, int userId)
        {

            DataTable productImagesTable = null;

            if (request.ImageIds != null)
            {
                productImagesTable = MapImagesToTable(request.ImageIds);
            }
            string procName = "[dbo].[Products_Update]";
            _data.ExecuteNonQuery(procName, inputParamMapper: delegate (SqlParameterCollection col)
            {
                AddCommonParams(request, col, userId);
                col.AddWithValue("@BatchImages", productImagesTable);
                col.AddWithValue("@Id", request.Id);
            }, returnParameters: null);
        }

        public void Delete(int id)
        {
            string procName = "[dbo].[Products_Delete]";
            _data.ExecuteNonQuery(procName, inputParamMapper: delegate (SqlParameterCollection col)
            {
                col.AddWithValue("@Id", id);
            }, returnParameters: null);
        } 
        #endregion

        #region - PRIVATE METHODS - 
        private Product MapSingleProduct(IDataReader reader, ref int startingIndex)
        {
            Product aProduct = new Product();

            aProduct.Id = reader.GetSafeInt32(startingIndex++);
            aProduct.Name = reader.GetSafeString(startingIndex++);
            aProduct.ProductType = _lookUpService.MapSingleLookUp(reader, ref startingIndex);
            aProduct.Description = reader.GetSafeString(startingIndex++);
            aProduct.StandId = reader.GetSafeInt32(startingIndex++);
            aProduct.Identifier = reader.GetSafeInt32(startingIndex++);
            aProduct.StatusType = _lookUpService.MapSingleLookUp(reader, ref startingIndex);
            aProduct.HourlyPriceInCents = reader.GetSafeInt32(startingIndex++);
            aProduct.Position = reader.GetSafeString(startingIndex++);
            aProduct.CreatedBy = reader.GetSafeInt32(startingIndex++);
            aProduct.ModifiedBy = reader.GetSafeInt32(startingIndex++);
            aProduct.FileId = reader.GetSafeInt32(startingIndex++);
            aProduct.Url = reader.GetSafeString(startingIndex++);
            aProduct.DateCreated = reader.GetSafeDateTime(startingIndex++);
            aProduct.DateModified = reader.GetSafeDateTime(startingIndex++);

            return aProduct;
        }

        private DataTable MapImagesToTable(List<int> imagesToMap)
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("Id", typeof(int));

            foreach (int singleImage in imagesToMap)
            {
                DataRow dr = dt.NewRow();
                int startingIndex = 0;
                dr.SetField(startingIndex++, singleImage);
                dt.Rows.Add(dr);
            }
            return dt;
        } 
       

        private static void AddCommonParams(ProductAddRequest request, SqlParameterCollection col, int userId)
        {
            col.AddWithValue("@Name", request.Name);
            col.AddWithValue("@ProductTypeId", request.ProductTypeId);
            col.AddWithValue("@Description", request.Description);
            col.AddWithValue("@StandId", request.StandId);
            col.AddWithValue("@Identifier", request.Identifier);
            col.AddWithValue("@StatusType", request.StatusType);
            col.AddWithValue("@HourlyPriceInCents", request.HourlyPriceInCents);
            col.AddWithValue("@Position", request.Position);
            col.AddWithValue("@CreatedBy", userId);
            col.AddWithValue("@ModifiedBy", userId);
        } 
        #endregion
    }
}
