import matplotlib.pyplot as plt

import os

OUTPUT_DIR = "temp_pdf_charts"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def metal_vs_limit(data):

    metals=[i["metal"] for i in data if i["metal"]!="Fe"]

    soil=[i["soil"] for i in data if i["metal"]!="Fe"]

    limit=[i["limit"] for i in data if i["metal"]!="Fe"]

    x=range(len(metals))

    plt.figure(figsize=(7,4))

    plt.bar(

        [i-0.2 for i in x],

        soil,

        width=0.4,

        label="Observed"

    )

    plt.bar(

        [i+0.2 for i in x],

        limit,

        width=0.4,

        label="WHO"

    )

    plt.xticks(x,metals)

    plt.ylabel("mg/kg")

    plt.legend()

    path=os.path.join(

        OUTPUT_DIR,

        "metal.png"

    )

    plt.tight_layout()

    plt.savefig(path,dpi=250)

    plt.close()

    return path


def pollution_chart(data):

    labels=[i["index"] for i in data]

    values=[i["value"] for i in data]

    plt.figure(figsize=(8,4))

    plt.barh(labels,values,color="green")

    path=os.path.join(

        OUTPUT_DIR,

        "indices.png"

    )

    plt.tight_layout()

    plt.savefig(path,dpi=250)

    plt.close()

    return path


def contribution_chart(data):

    labels=[i["metal"] for i in data]

    values=[i["percentage"] for i in data]

    plt.figure(figsize=(5,5))

    plt.pie(

        values,

        labels=labels,

        wedgeprops=dict(width=0.4),

        autopct="%1.1f%%"

    )

    path=os.path.join(

        OUTPUT_DIR,

        "contribution.png"

    )

    plt.savefig(path,dpi=250)

    plt.close()

    return path


def health_chart(data):

    groups=[i["group"] for i in data]

    actual=[i["actual"] for i in data]

    safe=[1,1]

    x=range(len(groups))

    plt.figure(figsize=(6,4))

    plt.bar(

        [i-0.2 for i in x],

        actual,

        width=0.4,

        label="Actual"

    )

    plt.bar(

        [i+0.2 for i in x],

        safe,

        width=0.4,

        label="Safe"

    )

    plt.xticks(x,groups)

    plt.legend()

    path=os.path.join(

        OUTPUT_DIR,

        "health.png"

    )

    plt.tight_layout()

    plt.savefig(path,dpi=250)

    plt.close()

    return path