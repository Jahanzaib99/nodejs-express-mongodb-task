module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      price: String,
      quantity: String,
      avatar: String,
      category_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Product = mongoose.model("product", schema);
  return Product;
};
