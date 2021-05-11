<template>
  <div class="container px-3 mx-auto">
    <div class="text-left mt-5">
      <goBack />
    </div>

    <h3 class="title">Disclaimer & Terms of Use</h3>
    <p>
      The information provided by BhavCovid (“we,” “us” or “our”) on
      bhavcovid.netlify.app (the “Site”) is for general informational purposes
      only. All information on the Site is provided in good faith, however we
      make no representation or warranty of any kind, express or implied,
      regarding the accuracy, adequacy, validity, reliability, availability or
      completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL
      WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED
      AS A RESULT OF THE USE OF THE SITE
    </p>

    <p>
      The information shared on this site is taken from various social media
      platforms and other sources and the intent is to centralise the
      information so people can access it from single source when needed and
      access it effortlessly, also we are hoping help people of Bhavnagar in
      this panademic as much as possible, The information is not verified by the
      SITE "bhavcovid.netlify.app" or people related to the SITE/ORGANISATION
      thus use at your own risk.
    </p>

    <p>
      The Site cannot and does not contain medical/health advice. The
      medical/health information is provided for general informational and
      educational purposes only and is not a substitute for professional advice.
      Accordingly, before taking any actions based upon such information, we
      encourage you to consult with the appropriate professionals. We do not
      provide any kind of medical/health advice. THE USE OR RELIANCE OF ANY
      INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK.
    </p>
  </div>
</template>

<script>
import goBack from "../components/goBack.vue";
export default {
  components: { goBack },
};
</script>

<style scoped lang="scss">
.title {
  text-align: left;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 20px;
}
p {
  text-align: left;
  font-size: 14px;
  margin: 20px 0;
}
</style>