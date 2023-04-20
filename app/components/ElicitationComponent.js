class ElicitationComponent {
  constructor(width, height, parentNode) {
    this.width = width;
    this.height = height;
    this.elicitedData = [];
    this.svg = d3
      .select(parentNode)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  }

  draw() {
    let svg = this.svg;
    let circle = svg
      .append("circle")
      .attr("r", 15)
      .attr("cx", this.width / 2)
      .attr("cy", this.width / 2)
      .attr("fill", "red");

    circle
      .on("mouseenter", () => {
        circle.attr("fill", "orange");
      })
      .on("mouseout", () => {
        circle.attr("fill", "red");
      });

    circle.on("click", () => {
      this.elicitedData.push("clicked");
    });
  }

  getData() {
    return this.elicitedData;
  }

  update() {}
}
