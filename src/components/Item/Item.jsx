export const Item = ({name, price, description, imagerUrl, children }) => {
    return (
         <article className="product-item">
           <img src={imagerUrl} alt={description} />
           <h2 className="product-title">{name}</h2>
           <p>Precio: ${precio}</p>
         <p><description></description></p>
         {children}
    </article>
    );
};

