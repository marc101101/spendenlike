<template>
  <div class="container">
    <div class="row" style="padding: 1rem;">
      <div class="col-12">
        <h1>{{ msg }}</h1>
      </div>
      <div class="col-12">
        <hr />
      </div>
      <div class="col-12">
        <h2>Wie kann ich Spenden?</h2>
        <p class="regular-font">
          Zunächst kannst du dich entscheiden, welche Zahlungsart gewählt werden soll. PayPal, Bankeinzug, Kreditkarte, paydirect und Überweisung stehen zur Verfügung. In einem zweiten Schritt ist es noch wichtig, wie du SpendenLike e.V. unterstützen möchtest. Die Spende kann dabei für unsere laufenden Vereinskosten verwendet werden (
          <a
            href="/spenden"
          >hier klicken</a> ), oder in unser aktuelles Projekt fließen (
          <a
            href="https://www.betterplace.org/en/projects/73873"
            target="blank"
          >hier klicken</a> ). Den Betrag kannst du jeweils selbst festlegen.
        </p>
      </div>
      <div class="col-12">
        <h2>Wie kann ich Mitglied im gemeinnützigen Verein SpendenLike e.V. werden?</h2>
        <p
          class="regular-font"
        >Schreibe uns bei Interesse einfach eine E-Mail an: j.guder@spendenlike.de und wir erklären dir alles.</p>
      </div>
      <div class="col-12">
        <h2>Wie bekomme ich eine Spendenquittung?</h2>
        <p
          class="regular-font"
        >Wenn du eine Spendenquittung haben möchtest, schicke uns einfach eine E-Mail mit deinen Daten und du bekommst eine ausgestellt: j.guder@spendenlike.de</p>
      </div>
      <div class="col-12">
        <h2>Warum verfügt SpendenLike e.V. kein offizielles DZI Spendensiegel?</h2>
        <p
          class="regular-font"
        >Eines unserer Ziele ist es natürlich, ein derartiges Qualitäts-Spendensiegel tragen zu dürfen. Da dies aber erst ab einer Spendensumme von 25.00€ und weiteren Bedingungen in Frage kommt, müssen wir uns noch gedulden, um dieses Ziel zu erreichen.</p>
      </div>
      <div class="col-12">
        <h2>Wie kann ich SpendenLike e.V. auch ohne Spenden unterstützen?</h2>
        <p class="regular-font">
          Neben Spendengeldern ist uns auch das „Digitale Auftreten“ ein großes Anliegen. Wenn du uns also unterstützen willst, würden wir uns sehr darüber freuen, wenn du unsere Beiträge in Facebook und Instagram teilst und uns somit mehr Reichweite gibst oder einfach nur deinen Bekannten von unserem Verein erzählst.
          (
          <a
            href="https://www.youtube.com/channel/UCz0S6k_Pcy5Wp_vlraC6C3w"
          >Youtube</a>/
          <a
            href="https://open.spotify.com/show/4V2sMOqfh0JdSYGBD8KeZ4?si=BeDVRxroQuiPHHPec4yKdg"
          >Spotify</a> )
        </p>
      </div>
      <div class="col-12">
        <h2>Was unterscheidet SpendenLike e.V. von anderen Non-Profit-Organisationen?</h2>
        <p
          class="regular-font"
        >Unser Ziel ist es, das „Social“ in „Social Media“ zu fördern. Nicht nur verschiedene Produkte und Lifestyles sollen durch Influencer verbreitet werden, sondern in unseren Augen auch soziale Themen und Projekte, um in erster Linie ein Bewusstsein dafür zu schaffen. Gleichzeitig sind wir ein Verein der Stadt Schwandorf, das heißt, wir setzen uns auch vor Ort für unsere Region und benachteiligte Menschen und Gruppierungen ein. Wir haben keinen festen Themenbereich, sondern agieren dort, wo in unseren Augen gerade die größte Not herrscht, ganz egal ob im Beriech Bildung, Gesundheit, Nachhaltigkeit oder Gleichberechtigung.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      msg: "FAQ"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  width: 2rem;
  float: left;
  border-width: 5px;
  margin-top: 0rem !important;
  background-color: #c62828;
}

.regular-font {
  font-family: Arial, Helvetica, sans-serif;
}

h2 {
  margin-top: 0.5rem;
}
.col-12 {
  margin-top: 2rem !important;
  word-break: break-word !important;
}

.container {
  text-align: left;
}
</style>