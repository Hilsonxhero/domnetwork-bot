<template>
    <div>
        <base-skeleton animated :loading="loader">
            <template #template>
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 lg:col-span-12">
                        <base-skeleton-item
                            variant="card"
                            class="h-[500px]"
                        ></base-skeleton-item>
                    </div>
                </div>
            </template>
            <template #default>
                <v-sheet>
                    <div class="mb-6">
                        <h2 class="text-xl">ایجاد کاربر</h2>
                    </div>

                    <Form ref="formRef" @submit="handleCreate">
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-12 lg:col-span-6">
                                <Field
                                    mode="passive"
                                    name="username"
                                    v-slot="{ field }"
                                    rules="required"
                                    label=" نام کاربری"
                                >
                                    <v-text-field
                                        v-model="form.username"
                                        label="نام کاربری"
                                        variant="solo-filled"
                                        size="large"
                                        v-bind="field"
                                        hide-details="auto"
                                    ></v-text-field>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage name="username" />
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <Field
                                    mode="passive"
                                    name="first_name"
                                    v-slot="{ field }"
                                    rules="required"
                                    label=" نام "
                                >
                                    <v-text-field
                                        v-model="form.first_name"
                                        label="نام "
                                        variant="solo-filled"
                                        size="large"
                                        v-bind="field"
                                        hide-details="auto"
                                    ></v-text-field>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage name="first_name" />
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <Field
                                    mode="passive"
                                    name="uid"
                                    v-slot="{ field }"
                                    label=" آیدی عددی تلگرام "
                                >
                                    <v-text-field
                                        v-model="form.uid"
                                        label="آیدی عددی تلگرام "
                                        variant="solo-filled"
                                        size="large"
                                        v-bind="field"
                                        hide-details="auto"
                                    ></v-text-field>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage name="uid" />
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <Field
                                    mode="passive"
                                    name="email"
                                    v-slot="{ field }"
                                    label=" ایمیل"
                                >
                                    <v-text-field
                                        v-model="form.email"
                                        label="ایمیل"
                                        variant="solo-filled"
                                        size="large"
                                        v-bind="field"
                                        hide-details="auto"
                                    ></v-text-field>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage name="email" />
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <Field
                                    mode="passive"
                                    name="wallet"
                                    v-slot="{ field }"
                                    rules="required"
                                    label=" مقدار کیف پول (تومان)"
                                >
                                    <v-text-field
                                        type="number"
                                        v-model="form.wallet"
                                        label="مقدار کیف پول (تومان)"
                                        size="large"
                                        v-bind="field"
                                        hide-details="auto"
                                    ></v-text-field>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage name="wallet" />
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <v-select
                                    v-model="form.status"
                                    label="انتخاب  وضعیت"
                                    :items="statuses"
                                    item-title="state"
                                    item-value="value"
                                    single-line
                                    variant="solo-filled"
                                ></v-select>
                            </div>

                            <div class="col-span-12 lg:col-span-6">
                                <Field
                                    mode="passive"
                                    name="password"
                                    v-slot="{ field }"
                                    label="رمز عبور"
                                    rules="required"
                                >
                                    <v-text-field
                                        type="password"
                                        v-model="form.password"
                                        label="رمز عبور"
                                        variant="solo-filled"
                                        size="large"
                                        v-bind="field"
                                        hide-details="auto"
                                    ></v-text-field>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage name="password" />
                                </div>
                            </div>

                            <div class="col-span-12 lg:col-span-6">
                                <Field
                                    mode="passive"
                                    name="password_confirmation"
                                    v-slot="{ field }"
                                    label="تکرار رمز عبور"
                                    rules="required"
                                >
                                    <v-text-field
                                        type="password"
                                        v-model="form.password_confirmation"
                                        label="تکرار رمز عبور"
                                        variant="solo-filled"
                                        size="large"
                                        v-bind="field"
                                        hide-details="auto"
                                    ></v-text-field>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage
                                        name="password_confirmation"
                                    />
                                </div>
                            </div>

                            <div class="col-span-12" v-if="!user?.is_partner">
                                <Field
                                    mode="passive"
                                    name="is_superuser"
                                    v-slot="{ field }"
                                    rules="required"
                                    label=" سطح کاربری"
                                >
                                    <v-radio-group
                                        v-bind="field"
                                        v-model="form.is_superuser"
                                    >
                                        <template v-slot:label>
                                            <div>سطح کاربری</div>
                                        </template>
                                        <v-radio
                                            label="کاربر ادمین"
                                            value="1"
                                        ></v-radio>
                                        <v-radio
                                            label="کاربر عادی"
                                            value="0"
                                        ></v-radio>
                                    </v-radio-group>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage name="is_superuser" />
                                </div>
                            </div>

                            <div class="col-span-12" v-if="!user?.is_partner">
                                <Field
                                    mode="passive"
                                    name="is_partner"
                                    v-slot="{ field }"
                                    rules="required"
                                    label=" نوع کاربری"
                                >
                                    <v-radio-group
                                        v-bind="field"
                                        v-model="form.is_partner"
                                    >
                                        <template v-slot:label>
                                            <div>نوع کاربری</div>
                                        </template>
                                        <v-radio
                                            label="کاربر عادی"
                                            value="0"
                                        ></v-radio>
                                        <v-radio
                                            label="کاربر همکار"
                                            value="1"
                                        ></v-radio>
                                    </v-radio-group>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage name="is_partner" />
                                </div>
                            </div>

                            <div class="col-span-12" v-if="!user?.is_partner">
                                <Field
                                    mode="passive"
                                    name="is_notifable"
                                    v-slot="{ field }"
                                    rules="required"
                                    label="ارسال اعلان"
                                >
                                    <v-radio-group
                                        v-bind="field"
                                        v-model="form.is_notifable"
                                    >
                                        <template v-slot:label>
                                            <div>ارسال اعلان</div>
                                        </template>
                                        <v-radio
                                            label="ارسال تمام اعلان های سیستم به این کاربر"
                                            value="1"
                                        ></v-radio>
                                        <v-radio
                                            label="عدم ارسال"
                                            value="0"
                                        ></v-radio>
                                    </v-radio-group>
                                </Field>
                                <div class="invalid-feedback d-block">
                                    <ErrorMessage name="is_notifable" />
                                </div>
                            </div>
                        </div>

                        <v-btn
                            :loading="loading"
                            color="light-blue-accent-4"
                            type="submit"
                            block
                            class="mt-2"
                            >ایجاد</v-btn
                        >
                    </Form>
                </v-sheet>
            </template>
        </base-skeleton>

        <v-snackbar absolute v-model="visible_success_message" :timeout="20000">
            کاربر با موفقیت ایجاد شد.
        </v-snackbar>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import ApiService from "@/Core/services/ApiService";
import { useRoute, useRouter } from "vue-router";
import { ErrorMessage, Field, Form } from "vee-validate";
import { BaseSkeleton, BaseSkeletonItem } from "@/Components/skeleton";
import { useAuthStore, type User } from "@/stores/auth";
import { storeToRefs } from "pinia";
const store = useAuthStore();
const { user } = storeToRefs(store);
const loader = ref(true);
const loading = ref(false);
const formRef = ref(null);
const form = ref({
    username: "",
    first_name: "",
    uid: null,
    status: "active",
    email: null,
    is_superuser: "0",
    wallet: "0",
    password: null,
    password_confirmation: null,
    is_notifable: "0",
    is_partner: "0",
});
const visible_success_message = ref(false);
const statuses = ref([
    { state: "فعال", value: "active" },
    { state: "غیرفعال", value: "inactive" },
]);
const router = useRouter();
const route = useRoute();
const handleCreate = async (event) => {
    const { valid } = await formRef.value.validate();
    if (valid) {
        loading.value = true;
        const form_data = new FormData();
        form_data.append("username", form.value.username);
        form_data.append("first_name", form.value.first_name);
        form_data.append("email", form.value.email);
        form_data.append("uid", form.value.uid);
        form_data.append("is_superuser", form.value.is_superuser);
        form_data.append("is_notifable", form.value.is_notifable);
        form_data.append("is_partner", form.value.is_partner);
        form_data.append("status", form.value.status);
        form_data.append("wallet", form.value.wallet);
        form_data.append("password", form.value.password ?? "");

        form_data.append(
            "password_confirmation",
            form.value.password_confirmation ?? ""
        );
        const { data } = await ApiService.post(`/api/panel/users`, form_data);
        if (data.status == 200) {
            visible_success_message.value = true;
            router.push({ name: "panel-users-index" });
        }
    }
};

const fetchData = async () => {
    // let { data } = await ApiService.get(`/api/panel/users/${route.params.id}`);
    // form.value.username = data.data.username;
    // form.value.first_name = data.data.first_name;
    // form.value.uid = data.data.uid;
    // form.value.status = data.data.status;
    // form.value.email = data.data.email;
    // form.value.is_superuser = data.data.is_superuser.toString();
    // form.value.is_notifable = data.data.is_notifable.toString();
    // form.value.wallet = data.data.wallet;
    // form.value.status = data.data.status;
    loader.value = false;
};
watchEffect(() => {
    if (formRef.value) {
        formRef.value.setValues({
            ...form.value,
        });
    }
});

onMounted(() => {
    fetchData();
});
</script>

<style scoped></style>
