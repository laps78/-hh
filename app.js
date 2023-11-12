function hhRuResumeUpdater() {
  console.log("hhRuResumeUpdater() started...");
  const resumeUpdateLinks = document.querySelectorAll(".bloko-link");
  if (resumeUpdateLinks) {
    resumeUpdateLinks.forEach((link) => {
      if (link.textContent === "Поднять в поиске") {
        link.click();
        console.log("link is clicked succesfully!");
      } else {
        console.log("Link textContent is wrong");
      }
    });
  }

  function closeFuckenBanner() {
    const fuckenBannerCloseButton = document.querySelector(
      ".bloko-modal-close-button"
    );
    if (fuckenBannerCloseButton) {
      console.log(`banner found`);
      fuckenBannerCloseButton.click();
      console.log(`banner closed`);
    } else {
      console.log(`banner not found. Ignore.`);
    }
  }
  setTimeout(closeFuckenBanner, 2500);
}

setInterval(hhRuResumeUpdater, 60000);
