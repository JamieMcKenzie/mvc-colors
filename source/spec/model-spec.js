describe ("Grid", function(){
  it("should return a grid object", function(){
    var grid = new Grid();
    expect(grid).toBeDefined();
  });

  it("should have a size of zero", function(){
    var grid2 = new Grid();
    expect(grid2.size).toEqual(0);
  });

  it("should have an empty array of tiles", function(){
    var grid = new Grid();
    expect(grid.tiles).toEqual([]);
  })

  it("should have a method addTile", function(){
    var grid = new Grid();
    var tile = new Tile();
    grid.addTile(tile);
    console.log(grid.tiles);
  })
})

describe ("Tile", function(){
  it("should return a tile object", function(){
    var tile = new Tile();
    expect(tile).toBeDefined();
  });
})

