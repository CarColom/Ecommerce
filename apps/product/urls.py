from django.urls import path

from .views import ProductDetailView, ListProductsView, ListSearchView, ListRelatedView, ListBySearchView, CreateProductView, UpdateProductView, DeleteProductView

app_name="product"
urlpatterns = [
    path('product/<productId>', ProductDetailView.as_view()),
    path('get-products', ListProductsView.as_view()),
    path('search', ListSearchView.as_view()),
    path('related/<productId>', ListRelatedView.as_view()),
    path('by/search', ListBySearchView.as_view()),
    path('create-product', CreateProductView.as_view()),
    path('update-product/<productId>', UpdateProductView.as_view()),
    path('delete-product/<productId>', DeleteProductView.as_view()),
]