describe ("Grid", function(){
  var grid;
  var tile;

  beforeEach(function(){
    grid = new Grid();
  })

  it("should return a grid object", function(){
    expect(grid).toBeDefined();
  });

  it("should be initialized with an empty array", function() {
    expect(grid.tiles).toEqual([]);
  });

  it("should be initialized with a size of zero", function(){
    expect(grid.size).toEqual(0);
  });

  describe("addTile", function(){
    it("should be defined", function(){
      expect(grid.addTile).toBeDefined();
    });

    it("should add a tile to the grid", function(){
      grid.addTile();
      expect(grid.size).toEqual(1);
    })
  });

  describe("removeTile", function(){
    it("should be defined", function(){
      expect(grid.removeTile).toBeDefined();
    });

    it("should remove a tile from the grid", function(){
      grid.removeTile();
      expect(grid.size).toEqual(0);
    })

  });
})

describe ("Tile", function(){
  var tile;

  beforeEach(function(){
    tile = new Tile();
  })

  it("should return a tile object", function(){
    expect(tile).toBeDefined();
  });

  it("should have white as its default color", function(){
    expect(tile.color).toEqual("#ffffff");
  })

})


