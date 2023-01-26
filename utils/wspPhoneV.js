exports.getPhone = (area, areas) => {
    if(!area) return { success: false }
    let a = areas.find((a) => a.name === area && a.isWspEnable === true);
    if(a && a.phone) return { success: true}
    return { success: false }
  }