export class ProductService {
  getProducts(){
    return [
      {
        imageUrl: "https://picsum.photos/150/150?random=1",
        productName: "Product 1",
        releasedDate: "May 31, 2018",
        description: "Cras sit amet ndiv ldsfidsof, in fgdsg...",
        rating: 2,
        numOfReviews: 6
      },
      {
        imageUrl: "https://picsum.photos/150/150?random=2",
        productName: "Product 2",
        releasedDate: "July 24, 2018",
        description: "Cras sit amet ndiv ldsfidsof, in fgdsg...",
        rating: 4,
        numOfReviews: 2
      },
      {
        imageUrl: "https://picsum.photos/150/150?random=3",
        productName: "Product 3",
        releasedDate: "June 5, 2018",
        description: "Cras sit amet ndiv ldsfidsof, in fgdsg...",
        rating: 3,
        numOfReviews: 5
      },
      {
        imageUrl: "https://picsum.photos/150/150?random=4",
        productName: "Product 4",
        releasedDate: "May 12, 2018",
        description: "Cras sit amet ndiv ldsfidsof, in fgdsg...",
        rating: 5,
        numOfReviews: 1
      }
    ];
  }
}